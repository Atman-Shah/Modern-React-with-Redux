function Table({ data, config }) {
    const renderedHeaders = config.map((column) => {
        return <th key={column.lable}>{column.lable}</th>
    });

    const renderedRows = data.map((fruit) => {
        const renderedCells = config.map((column) => {
            return <td className="p-2" key={column.lable}>{column.render(fruit)}</td>;
        });

        return (
            <tr className="border-b" key={fruit.name}>
                {renderedCells}
            </tr>
        );
    });


  return (
    <table className="table-auto border-spacong-2">
      <thead>
        <tr className="border-b-2">
            {renderedHeaders}
        </tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
