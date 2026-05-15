import { useMemo, useState, useEffect } from "react";
import { volunteers as rawVolunteers } from "../../data/volunteers";

function formatCellValue(value) {
  if (value === null || value === undefined) return "";
  if (typeof value === "string") return value.trim();
  if (typeof value === "number") return Number.isInteger(value) ? String(value) : value.toFixed(2);
  return String(value);
}

export default function VolunteersList() {
  const [headers, setHeaders] = useState([]);
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    try {
      setLoading(true);
      setError("");

      if (!rawVolunteers || rawVolunteers.length === 0) {
        throw new Error("No volunteers data found. Please add volunteers to src/data/volunteers.js");
      }

      // Extract headers from the first volunteer object
      const cleanedHeaders = Object.keys(rawVolunteers[0]).map((key) => {
        // Convert camelCase to Title Case
        return key
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (str) => str.toUpperCase())
          .trim();
      });

      // Convert volunteer objects to table rows
      const normalizedRows = rawVolunteers
        .map((volunteer, rowIndex) => {
          const cells = Object.values(volunteer).map((val) => formatCellValue(val));

          return {
            key: `row-${rowIndex}`,
            cells,
          };
        });

      if (!cancelled) {
        setHeaders(cleanedHeaders);
        setRows(normalizedRows);
      }
    } catch (err) {
      if (!cancelled) {
        setError(err instanceof Error ? err.message : "Failed to load volunteers data.");
      }
    } finally {
      if (!cancelled) {
        setLoading(false);
      }
    }
  }, []);

  const stats = useMemo(() => {
    return [
      { label: "Rows in database", value: rows.length },
      { label: "Visible columns", value: headers.length },
      { label: "Source", value: "JSON data" },
    ];
  }, [headers.length, rows.length]);

  return (
    <>
      <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 2.25rem" }}>
        <div className="tag" style={{ justifyContent: "center" }}>Team</div>
        <h2 className="sec-h">Volunteers List</h2>
        <div className="rule" style={{ margin: "0 auto" }} />
        <p style={{ color: "var(--slate)", marginTop: "1rem", fontSize: "1.02rem", lineHeight: 1.8 }}>

        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: "1rem",
          marginBottom: "1.5rem",
        }}
        className="volunteers-stats"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            style={{
              background: "rgba(255,255,255,0.92)",
              border: "1px solid var(--border)",
              borderRadius: "18px",
              padding: "1.1rem 1.2rem",
              boxShadow: "0 14px 40px rgba(11,61,34,0.05)",
            }}
          >
            <div style={{ fontSize: "1.65rem", fontWeight: 900, color: "var(--navy)", lineHeight: 1 }}>{loading ? "--" : stat.value}</div>
            <div style={{ marginTop: "0.35rem", fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--slate)" }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {error ? (
        <div
          style={{
            background: "#fff7ed",
            border: "1px solid #fdba74",
            color: "#9a3412",
            borderRadius: "16px",
            padding: "1rem 1.2rem",
            fontWeight: 700,
          }}
        >
          {error}
        </div>
      ) : (
        <div
          style={{
            background: "rgba(255,255,255,0.94)",
            border: "1px solid var(--border)",
            borderRadius: "22px",
            boxShadow: "0 22px 60px rgba(11,61,34,0.08)",
            overflow: "hidden",
          }}
        >
          <div style={{ padding: "1rem 1.25rem", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap" }}>
            <div>
              <div className="tag" style={{ marginBottom: "0.35rem" }}>Data Source</div>
              <div style={{ fontSize: "1rem", fontWeight: 800, color: "var(--navy)" }}>volunteers.js</div>
            </div>
            <div style={{ fontSize: "0.82rem", color: "var(--slate)" }}>
              {loading ? "Loading volunteers..." : `${rows.length} volunteer rows loaded`}
            </div>
          </div>

          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 900 }}>
              <thead>
                <tr style={{ background: "#f8fafc" }}>
                  {headers.map((header) => (
                    <th
                      key={header}
                      style={{
                        textAlign: "left",
                        fontSize: "0.72rem",
                        textTransform: "uppercase",
                        letterSpacing: "0.12em",
                        color: "var(--slate)",
                        padding: "0.95rem 1rem",
                        borderBottom: "1px solid var(--border)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={Math.max(headers.length, 1)} style={{ padding: "1.4rem", color: "var(--slate)" }}>
                      Loading workbook...
                    </td>
                  </tr>
                ) : rows.length ? (
                  rows.map((row) => (
                    <tr key={row.key}>
                      {row.cells.map((cell, index) => (
                        <td
                          key={`${row.key}-${index}`}
                          style={{
                            padding: "0.95rem 1rem",
                            borderBottom: "1px solid rgba(194,214,201,0.6)",
                            color: "var(--navy)",
                            fontSize: "0.92rem",
                            verticalAlign: "top",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {cell || "-"}
                        </td>
                      ))}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={Math.max(headers.length, 1)} style={{ padding: "1.4rem", color: "var(--slate)" }}>
                      No volunteer rows were found in the workbook.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
}
