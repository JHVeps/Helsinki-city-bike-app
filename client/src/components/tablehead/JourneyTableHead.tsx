import {
  TableHead,
  TableRow,
  TableCell,
  Typography,
  Box,
  TableSortLabel,
} from "@mui/material";
import {
  Data,
  JourneyEnhancedTableProps,
  headCells,
} from "types/journey.types";

const TableHeadHome = (props: JourneyEnhancedTableProps) => {
  const { order, orderBy, onRequestSort, journeys } = props;

  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };
  // Destructure to notification components
  if (journeys.isLoading) {
    return (
      <Box>
        <Typography
          sx={{
            borderRight: "2px solid #363433",
            fontSize: "2rem",
            color: "green",
            padding: "20px",
          }}
        >
          Loading...
        </Typography>
      </Box>
    );
  }
  if (journeys.error) {
    return (
      <Box>
        <Typography
          sx={{
            borderRight: "2px solid #363433",
            fontSize: "2rem",
            color: "red",
            padding: "20px",
          }}
        >
          ERROR!
        </Typography>
      </Box>
    );
  }

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="center"
            sx={{
              borderRight: "2px solid #363433",
              fontSize: "1.5rem",
            }}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span">
                  {order === "desc" ? ": sorted desc" : ": sorted asc"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeadHome;
