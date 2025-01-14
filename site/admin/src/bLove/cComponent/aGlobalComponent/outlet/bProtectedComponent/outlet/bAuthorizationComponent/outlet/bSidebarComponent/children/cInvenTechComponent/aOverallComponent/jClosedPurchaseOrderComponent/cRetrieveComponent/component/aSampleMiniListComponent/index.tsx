import React from "react";


import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { tasks } from "./data/tasks";


const SampleMiniListComponent = () => {
  // JSX
  return (
    <React.Fragment>
      {/* SampleMiniListComponent */}

      <div className="w-[100vh - 500px]">
        <DataTable data={tasks} columns={columns as any} />
      </div>
    </React.Fragment>
  )
}

export default SampleMiniListComponent;
