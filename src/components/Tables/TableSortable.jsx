import { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { getTableReturn } from "../../utils/getTableReturn";

export default function TableSortable({
  headers,
  initialKey,
  data,
  onCLickItem = () => {},
}) {
  const [sort, setSort] = useState({
    keyToSort: initialKey,
    direction: "desc",
  });

  const handleHeaderClick = (header) => {
    setSort({
      keyToSort: header.key,
      direction:
        header.key === sort.keyToSort
          ? sort.direction === "asc"
            ? "desc"
            : "asc"
          : "desc",
    });
  };

  const getSortedArray = (arrayToSort) => {
    const isNumeric =
      arrayToSort[0] && typeof arrayToSort[0][sort.keyToSort] === "number";
    const sortedArray = arrayToSort.sort((a, b) => {
      const valueA = isNumeric
        ? parseFloat(a[sort.keyToSort])
        : a[sort.keyToSort];
      const valueB = isNumeric
        ? parseFloat(b[sort.keyToSort])
        : b[sort.keyToSort];
      if (valueA < valueB) {
        return sort.direction === "asc" ? -1 : 1;
      } else if (valueA > valueB) {
        return sort.direction === "asc" ? 1 : -1;
      } else {
        return 0;
      }
    });
    return sortedArray;
  };

  const isNumericColumn = (key) => {
    return (
      data &&
      data.length > 0 &&
      data.every((row) => !isNaN(parseFloat(row[key])) && isFinite(row[key]))
    );
  };

  const keys = headers.map((header) => header.key);

  return (
    <table className="w-full">
      <thead>
        <tr className="sticky top-0 cursor-pointer">
          {headers.map((header, index) => (
            <th
              key={index}
              className=""
              onClick={() => handleHeaderClick(header)}>
              {header.label}
              {header.key === sort.keyToSort && sort.direction === "asc" ? (
                <FaCaretUp className="ml-2 inline" />
              ) : (
                <FaCaretDown className="ml-2 inline" />
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data && initialKey ? (
          getSortedArray(data).map((x, index) => (
            <tr
              className="text-center"
              key={index}
              onClick={() => onCLickItem(x)}>
              {keys.map((k) => (
                <td
                  key={k}
                  className={`${
                    isNumericColumn(k) ? "text-center" : "text-left"
                  }`}>
                  {getTableReturn(x, k)}
                </td>
              ))}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={headers.length}>Näo há dados disponíveis</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
