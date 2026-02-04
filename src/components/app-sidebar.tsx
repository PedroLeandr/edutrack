import { User } from "lucide-react";
import { Sidebar, SidebarGroup, SidebarHeader, } from "./ui/sidebar";



export default function AppySidebar() {



    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <SidebarGroup className="group-data-[collapsible=icon]:hidden">
                    <User className="w-4 h-4 " />
                </SidebarGroup>
            </SidebarHeader>
        </Sidebar>
    )
}