import { useState, useEffect, useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import { Table, TableHeader, TableHead, TableRow, TableBody, TableCell } from "@/components/ui/table";
import { Input } from "@/components/ui/input"; // For filtering
import { Button } from "@/components/ui/button"; // For pagination buttons

const SongsTable = () => {
  const [songs, setSongs] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [sorting, setSorting] = useState([]);
  const [pageIndex, setPageIndex] = useState(0);

  // Fetch data from backend
  useEffect(() => {
    fetch("http://localhost:8080/api/songs")
      .then((response) => response.json())
      .then((data) => setSongs(data))
      .catch((error) => console.error("Error fetching songs:", error));
  }, []);

  // Define table columns (✅ Fixed Headers & Cells)
  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: () => <span>ID</span>,
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "track",
        header: () => <span>Track</span>,
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "albumName",
        header: () => <span>Album</span>,
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "artist",
        header: () => <span>Artist</span>,
        cell: (info) => info.getValue(),
      },
      {
        accessorKey: "releaseDate",
        header: () => <span>Release Date</span>,
        cell: (info) => new Date(info.getValue()).toLocaleDateString(),
      },
      {
        accessorKey: "trackScore",
        header: () => <span>Track Score</span>,
        cell: (info) => info.getValue().toFixed(2),
      },
      {
        accessorKey: "explicitTrack",
        header: () => <span>Explicit</span>,
        cell: (info) => (info.getValue() ? "Yes" : "No"),
      },
    ],
    []
  );

  // Apply filter
  const filteredData = useMemo(() => {
    return songs.filter((song) =>
      song.track.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [songs, filterText]);

  // Initialize table
  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
      pagination: { pageIndex, pageSize: 100 },
    },
    onSortingChange: setSorting,
    onPaginationChange: (updater) => {
      const newState = typeof updater === "function" ? updater({ pageIndex }) : updater;
      setPageIndex(newState.pageIndex);
    },
  });

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Songs List</h2>

      {/* Filter input */}
      <Input
        type="text"
        placeholder="Filter by track..."
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        className="mb-4"
      />

      {/* Table */}
      <Table className="w-full border-collapse border border-gray-300">
        {/* ✅ Fixed Headers */}
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="bg-gray-100">
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id} className="border p-2 font-bold text-left">
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>

        {/* Table Body */}
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id} className="hover:bg-gray-200">
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id} className="border p-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <Button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
          Previous
        </Button>
        <span>
          Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </span>
        <Button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default SongsTable;
