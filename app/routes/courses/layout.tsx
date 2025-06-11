import { Link, Outlet, useMatches } from "react-router";

import { AppSidebar } from "~/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import { Separator } from "~/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "~/components/ui/sidebar";

export default function CoursesLayout() {
  const matches = useMatches();

  const courseMatch = matches.find((match) =>
    match.pathname.includes("courses"),
  );
  const courseData = courseMatch?.data;
  console.log(courseData);
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <Link to={"course"}>Building Your Application</Link>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <Link to={"course"}>Building Your Application</Link>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  );
}
