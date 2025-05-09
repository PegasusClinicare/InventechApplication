import React from "react"
import moment from 'moment';
import { useNavigate } from "react-router-dom";

import UserBlockComponent from "@/bLove/cComponent/aGlobalComponent/component/aUserBlockComponent"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/aConnection/bShadcnConnection/components/ui/card"
import { formatLyricsWithHtml } from "@/aConnection/aAppConnection/HtmlTextParser";
import { Button } from "@/aConnection/bShadcnConnection/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/aConnection/bShadcnConnection/components/ui/table";
import { ScrollArea, ScrollBar } from "@/aConnection/bShadcnConnection/components/ui/scroll-area";
import { CheckCircle, OctagonMinus } from "lucide-react";


type TypicalDeleteComponentType = {
  ReduxCall: any
  APICall: {
    retrieveAPIResponse: any,
    deleteAPITrigger: any,
    deleteAPIResponse: any
  }
  extras: {
    apiResponseHandler: {
      deleteAPIResponseHandler: any
    },
    data: any
  }
  params: any
}

const TypicalDeleteComponent = (props: TypicalDeleteComponentType) => {
  // Destructure Props
  const { APICall, extras, params } = props;

  // Variable
  const navigate = useNavigate()

  // Submit Handler
  const onSubmit = async (event: any) => {
    event.preventDefault();

    extras.apiResponseHandler.deleteAPIResponseHandler(APICall.deleteAPITrigger, navigate, params)
    // extras.apiResponseHandler.updateAPIResponseHandler(data, ReduxCall, APICall.updateAPITrigger, form, navigate)
  }    

  // JSX
  return (
    <React.Fragment>
      {/* TypicalDeleteComponent */}
      <div className="flex-1 lg:max-w-2xl">
        <div className="mb-8" >
          <h2 className="text-3xl font-bold tracking-tight">{extras.data.header.title}</h2>
          <p className="text-muted-foreground">
            {extras.data.header.subtitle}
          </p>
        </div>
      </div>

      <div className="mx-auto grid flex-1 auto-rows-max gap-4">
        {
          APICall.retrieveAPIResponse.isLoading ? "Loading..." : 
          APICall.retrieveAPIResponse.isError ? "Error..." :
          APICall.retrieveAPIResponse.isSuccess ? (
            <React.Fragment>
              {
                APICall.retrieveAPIResponse.data.success ? (
                  <React.Fragment>
                    <div className="grid flex-1 items-start gap-4 sm:py-0 lg:grid-cols-2 xl:grid-cols-2">
                      {extras.data.content.sections.map((eachSection: any, indexSection: number) => eachSection.display && (
                        <div key={indexSection} >
                          <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4" >
                            <CardHeader className="flex flex-row items-start bg-muted/50">
                              <div className="grid gap-0.5">
                                <CardTitle className="group flex items-center gap-2 text-lg">
                                  {eachSection.title}
                                </CardTitle>
                                <CardDescription>{eachSection.subtitle}</CardDescription>
                              </div>
                            </CardHeader>
                            <CardContent className="p-6 text-sm">
                              <div className="grid gap-3">
                                <ul className="grid gap-3">
                                  {eachSection.values.map((eachValue: any, indexValue: number) => (
                                    <React.Fragment>
                                      {((eachValue.type === "normal" &&
                                        <li className="flex flex-col gap-1 items-start justify-between" key={indexValue} >
                                          <span className="text-muted-foreground">
                                            {eachValue.label}:
                                          </span>
                                          <span>{eachValue.value || "--N/A--"}</span>
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
                    </div>
                    <Button variant="destructive" onClick={onSubmit} >Delete</Button>
                  </React.Fragment>
                ) : "Backend Error"
              }
            </React.Fragment>
          ) :
          "Let me understand first"
        }
      </div>
    </React.Fragment>      
  )
}  

export default TypicalDeleteComponent;
