import moment from 'moment';
import React from "react";

import UserBlockComponent from "@/bLove/cComponent/aGlobalComponent/component/aUserBlockComponent";

import { formatLyricsWithHtml } from "@/aConnection/aAppConnection/HtmlTextParser";
import { Button } from "@/aConnection/bShadcnConnection/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/aConnection/bShadcnConnection/components/ui/card";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/aConnection/bShadcnConnection/components/ui/dialog";
import { ScrollArea, ScrollBar } from "@/aConnection/bShadcnConnection/components/ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/aConnection/bShadcnConnection/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/aConnection/bShadcnConnection/components/ui/tabs';
import { cn } from "@/aConnection/bShadcnConnection/lib/utils";
import fullRoute from "@/bLove/gRoute/bFullRoute";
import { CheckCircle, DownloadCloudIcon, Edit2Icon, OctagonMinus, PlusIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import SampleMiniListComponent from "./component/aSampleMiniListComponent";
import SampleMiniList2Component from "./component/bSampleMiniList2Component";
import SampleMiniList3Component from './component/cSampleMiniList3Component';
import SampleMiniList4Component from './component/dSampleMiniList4Component';
import data from "./extras/bData";


// type ClosedPurchaseOrderRetrieveComponentType = {
  // ReduxCall: any
  // APICall: {
  //   retrieveAPIResponse: any
  // }
  // extras: {
  //   apiResponseHandler: {
  //     retrieveAPIResponseHandler: any
  //   },
  //   data: any
  // }
// }

const ClosedPurchaseOrderRetrieveComponent = () => {
  // Destructure Props
  // const { APICall, extras } = props;

  // JSX
  return (
    <React.Fragment>
      {/* ClosedPurchaseOrderRetrieveComponent */}
      <div className="flex-1 space-y-8">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Closed Purchase Order Information
            </h2>
            {/* <p className="text-muted-foreground">
              Sample List Details
            </p> */}
          </div>
          <div className="hidden lg:flex items-center space-x-2">
            <Button asChild variant="blue" >
              <Link to={""} ><DownloadCloudIcon /> Export</Link>
            </Button>
            <Button asChild variant="blue" >
              <Link to={fullRoute.aGlobalRoute.bProtectedRoute.bAuthorizationRoute.bSidebarRoute.cInvenTechRoute.aOverallRoute.cStoreManagementRoute.bCreateRoute} ><Edit2Icon /> Edit</Link>
            </Button>
            <Button asChild variant="destructive" >
              <Link to={""} ><Trash2Icon /> Delete</Link>
            </Button>
          </div>
        </div>

        <div className="mx-auto grid flex-1 auto-rows-max gap-4">
          {/* {
            APICall.retrieveAPIResponse.isLoading ? "Loading..." : 
            APICall.retrieveAPIResponse.isError ? "Error..." :
            APICall.retrieveAPIResponse.isSuccess ? (
              <React.Fragment> */}
                {/* {
                  APICall.retrieveAPIResponse.data.success ? (
                    <React.Fragment> */}

            <div className="grid flex-1 items-start gap-4 sm:py-0">
              {data().content.sections.map((eachSection: any, indexSection: number) => eachSection.display && (
                <div key={indexSection} >
                  <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4" >
                    <CardHeader className="flex flex-row items-start bg-muted/50">
                      <div className="grid gap-0.5">
                        <CardTitle className="group flex items-center gap-2 text-lg">
                          {eachSection.title}
                        </CardTitle>
                        {/* <CardDescription>{eachSection.subtitle}</CardDescription> */}
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 text-sm">
                      <div className="grid gap-3">
                        <ul className="grid gap-3 grid-cols-6">
                          {eachSection.values.map((eachValue: any, indexValue: number) => (
                            <React.Fragment>
                              {((eachValue.type === "normal" &&
                                <li className={cn("flex flex-col gap-1 items-start justify-between", eachValue?.style)} key={indexValue} >
                                  <span className="text-muted-foreground">
                                    {eachValue.label}:
                                  </span>
                                  <span className="w-4/5 truncate text-lg" >{eachValue.value || "--N/A--"}</span>
                                </li>
                              ))}

                              {((eachValue.type === "textarea" &&
                                <li className="flex flex-col gap-1 items-start justify-between" key={indexValue} >
                                  <span className="text-muted-foreground">
                                    {eachValue.label}:
                                  </span>
                                  <span>{formatLyricsWithHtml(eachValue.value || "--N/A--") || "--N/A--"}</span>
                                </li>
                              ))}

                              {((eachValue.type === "userBlock" &&
                                <li className="flex items-center justify-between">
                                  <span className="text-muted-foreground">
                                    {eachValue.label}:
                                  </span>
                                  <span>{eachValue.value ? <UserBlockComponent user={eachValue.value} /> : "--N/A--"}</span>
                                </li>
                              ))}
                              
                              {((eachValue.type === "date" &&
                                <li className="flex items-center justify-between">
                                  <span className="text-muted-foreground">
                                    {eachValue.label}:
                                  </span>
                                  <span className="flex flex-col items-end" >
                                    {eachValue.value ? (
                                      <React.Fragment>
                                        <span>{moment(eachValue.value).format("ddd, Do MMM YYYY")}</span>
                                        <span>{moment(eachValue.value).format("hh:mm:ss A")}</span>
                                      </React.Fragment>
                                    ) : <span>--N/A--</span>}
                                  </span>
                                </li>
                              ))}

                              {((eachValue.type === "special-checkbox" &&
                                <React.Fragment>
                                  <li className="flex flex-col items-start justify-between">
                                    <span className="text-muted-foreground">
                                      {eachValue.label}:
                                    </span>
                                    <span className="flex flex-col items-end" >
                                      <ScrollArea className="w-[450px] p-1" >
                                      {eachValue.value ? (
                                        <React.Fragment>
                                          <Table>
                                            <TableHeader>
                                              <TableRow>
                                                {eachValue.columns.map((eachColumn: any, indexColumn: any) => (
                                                  <TableHead key={indexColumn} className="min-w-[100px]">
                                                    {eachColumn}
                                                  </TableHead>
                                                ))}
                                              </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                              {eachValue.value
                                                ?.filter((menuOption: any) => menuOption?.menu?._id)
                                                ?.map((menuOption: any, indexOption: any) => (
                                                <TableRow key={indexOption}>
                                                  <TableCell>{menuOption.menu.aTitle}</TableCell>
                                                  {Object.keys(menuOption.access).map((permission) => (
                                                    <TableCell key={permission} >
                                                      {menuOption.access[permission] ? <CheckCircle className="text-green-500 h-4 w-4" /> : <OctagonMinus className="text-red-500 h-4 w-4" />}
                                                    </TableCell>
                                                  ))}
  
                                                </TableRow>
                                              ))}
                                            </TableBody>
                                          </Table>
                                          <ScrollBar orientation="horizontal" />
                                        </React.Fragment>
                                      ) : <span>--N/A--</span>}
                                      </ScrollArea>
                                    </span>
                                  </li>
                                </React.Fragment>
                              ))}
                              
                              {((eachValue.type === "data-list" &&
                                <li className={cn("flex flex-col gap-2 items-start justify-between col-span-5", eachValue?.style)} key={indexValue} >
                                  <span className="w-full flex flex-row align-middle items-center gap-4" >
                                    <span className="text-muted-foreground">
                                      {eachValue.label}:
                                    </span>
                                    <Dialog>
                                      <DialogTrigger asChild>
                                        <Button variant="blue" size="sm" ><PlusIcon /> Add Product</Button>
                                      </DialogTrigger>
                                      <DialogContent>
                                        <DialogHeader>
                                          <DialogTitle>Add Product</DialogTitle>
                                          {/* <DialogDescription>
                                            Anyone who has this link will be able to view this.
                                          </DialogDescription> */}
                                        </DialogHeader>

                                        <ul className="grid gap-4 grid-cols-2">
                                          <li className={cn("flex flex-col gap-1 items-start justify-between", eachValue?.style)} key={indexValue} >
                                            <span className="text-muted-foreground text-sm">
                                              {"Store Name"}:
                                            </span>
                                            <span className="w-4/5 truncate text-lg" >{"Dubai Center"}</span>
                                          </li>
                                          <li className={cn("flex flex-col gap-1 items-start justify-between col-span-5 ", eachValue?.style)} key={indexValue} >
                                            <span className="text-muted-foreground text-sm">
                                              {"Search & Select Product"}:
                                            </span>
                                            <SampleMiniList2Component />
                                          </li>
                                        </ul>

                                        {/* <div className="flex items-center space-x-2">
                                          <div className="grid flex-1 gap-2">
                                            <Label htmlFor="link" className="sr-only">
                                              Link
                                            </Label>
                                            <Input
                                              id="link"
                                              defaultValue="https://ui.shadcn.com/docs/installation"
                                              readOnly
                                            />
                                          </div>
                                          <Button type="submit" size="sm" className="px-3">
                                            <span className="sr-only">Copy</span>
                                            <Copy />
                                          </Button>
                                        </div> */}
                                        <DialogFooter className="sm:justify-between">
                                          <DialogClose asChild>
                                            <Button type="button" variant="destructive">
                                              Cancel
                                            </Button>
                                          </DialogClose>
                                          <Button type="button" variant="blue">
                                            <PlusIcon /> Add
                                          </Button>
                                        </DialogFooter>
                                      </DialogContent>
                                    </Dialog>

                                  </span>
                                  <SampleMiniListComponent />
                                </li>
                              ))}
                                                            
                            </React.Fragment>
                          ))}
                          {/* Important Comment */}
                          {/* <li className="flex items-center justify-center mb-3">
                            <div
                              className="flex flex-col gap-2 items-center justify-between rounded-md border-2 border-muted bg-transparent p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                              <span className="text-muted-foreground" >Cover Image:</span>
                              <img src={Cover} alt="User" width={150} />
                            </div>
                          </li> */}
                          {/* <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">
                              Title:
                            </span>
                            <span>{APICall.retrieveAPIResponse.data.retrieve.aTitle || "--N/A--"}</span>
                          </li> */}
                          {/* <li className="flex items-center justify-between">
                            <span className="text-muted-foreground">
                              Status:
                            </span>
                            <span>{APICall.retrieveAPIResponse.data.retrieve.aStatus ? <Badge>Active</Badge> : <Badge>Inactive</Badge>}</span>
                          </li> */}
                          {/* <li className="flex flex-col gap-1 items-start justify-between">
                            <span className="text-muted-foreground">
                              Description:
                            </span>
                            <span>{formatLyricsWithHtml(APICall.retrieveAPIResponse.data.retrieve.aDescription || "--N/A--") || "--N/A--"}</span>
                          </li> */}
                        </ul>
                      </div>
                    </CardContent>
                    {/* <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
                      <div className="text-xs text-muted-foreground">
                        Updated <time dateTime="2023-11-23">November 23, 2023</time>
                      </div>
                      <Pagination className="ml-auto mr-0 w-auto">
                        <PaginationContent>
                          <PaginationItem>
                            <Button size="icon" variant="outline" className="h-6 w-6">
                              <ChevronLeft className="h-3.5 w-3.5" />
                              <span className="sr-only">Previous Order</span>
                            </Button>
                          </PaginationItem>
                          <PaginationItem>
                            <Button size="icon" variant="outline" className="h-6 w-6">
                              <ChevronRight className="h-3.5 w-3.5" />
                              <span className="sr-only">Next Order</span>
                            </Button>
                          </PaginationItem>
                        </PaginationContent>
                      </Pagination>
                    </CardFooter> */}
                  </Card>
                </div>                      
              ))}
              
              <div className='' >
                <Tabs defaultValue="product-list" className="w-full">
                  <TabsList className="grid w-[600px] grid-cols-3">
                    <TabsTrigger value="product-list">Product List</TabsTrigger>
                    <TabsTrigger value="received-track">Received Track</TabsTrigger>
                    <TabsTrigger value="cost-structure">Cost Structure</TabsTrigger>
                  </TabsList>
                  <TabsContent value="product-list" className='flex flex-col gap-4' >
                    <SampleMiniListComponent />
                  </TabsContent>
                  <TabsContent value="received-track" className='flex flex-col gap-4' >
                    <SampleMiniList3Component />
                  </TabsContent>
                  <TabsContent value="cost-structure" className='flex flex-col gap-4' >
                    <ul className="grid gap-3 grid-cols-5">
                      <li className={cn("flex flex-col gap-1 items-start justify-between")}>
                        <span className="text-muted-foreground text-sm">
                          {"Fixed Cost Total (AED)"}:
                        </span>
                        <span className="w-4/5 truncate text-lg" >{"276.67"}</span>
                      </li>
                      <li className={cn("flex flex-col gap-1 items-start justify-between")}>
                        <span className="text-muted-foreground text-sm">
                          {"Frieght Charges (AED)"}:
                        </span>
                        <span className="w-4/5 truncate text-lg" >{"28.00"}</span>
                      </li>
                      <li className={cn("flex flex-col gap-1 items-start justify-between")}>
                        <span className="text-muted-foreground text-sm">
                          {"Customs & MISC (AED)"}:
                        </span>
                        <span className="w-4/5 truncate text-lg" >{"276.00"}</span>
                      </li>
                      <li className={cn("flex flex-col gap-1 items-start justify-between")}>
                        <span className="text-muted-foreground text-sm">
                          {"Total Cost (AED)"}:
                        </span>
                        <span className="w-4/5 truncate text-lg" >{"2888.43"}</span>
                      </li>
                      <li className={cn("flex flex-col gap-1 items-start justify-between")}>
                        <span className="text-muted-foreground text-sm">
                          {"PO Value (AED)"}:
                        </span>
                        <span className="w-4/5 truncate text-lg" >{"223.45"}</span>
                      </li>
                    </ul>
                    <SampleMiniList4Component />
                  </TabsContent>
                </Tabs>                                
              </div>
            </div>

                    {/* </React.Fragment>
                  ) : "Backend Error"
                } */}
              {/* </React.Fragment>
            ) :
            "Let me understand first"
          } */}
        </div>
      </div>

    </React.Fragment>      
  )
}  

export default ClosedPurchaseOrderRetrieveComponent;
