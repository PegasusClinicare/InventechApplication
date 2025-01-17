import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/aConnection/bShadcnConnection/components/ui/button";
import endpointRoute from "@/bLove/gRoute/aEndpointRoute";
import { PlusIcon } from "lucide-react";

const StockTransferComponent = () => {
  return (
    <React.Fragment>
      {/* StockTransferComponent */}
      <div className="flex-1 space-y-8">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              Stock Transfer
            </h2>
          </div>
        </div>
        <div className="mx-auto flex flex-wrap auto-rows-max gap-x-24 gap-y-7">
          <div>
            <label htmlFor="from" className="">
              Select Transfer FROM Location
            </label>
            <input
              id="from"
              type="text"
              placeholder="Search"
              className="flex mt-2 h-9 w-[578px] rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <div>
            <label htmlFor="to" className="">
              Select Transfer TO Location
            </label>
            <input
              id="to"
              type="text"
              placeholder="Search"
              className="flex mt-2 h-9 w-[578px] rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <div>
            <label htmlFor="item" className="">
              Select Item
            </label>
            <input
              id="item"
              type="text"
              placeholder="Search"
              className="flex mt-2 h-9 w-[578px] rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <div>
            <label htmlFor="item" className="">
              Enter Quantity
            </label>
            <input
              id="item"
              type="text"
              placeholder="Search"
              className="flex mt-2 h-9 w-[578px] rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <Button type="button" variant="destructive" asChild>
            <Link
              //   to={
              //     endpointRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute
              //       .bSidebarRoute.cInvenTechRoute.aOverallRoute
              //       .kInventoryGeneralRoute.aListRoute
              //   }
              to="/inventory-general-list"
            >
              Cancel
            </Link>
          </Button>
          <Button type="submit" variant="blue">
            Add
            <PlusIcon />
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default StockTransferComponent;
