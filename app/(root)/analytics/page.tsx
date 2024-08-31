import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

import Sidebar from '@/components/Sidebar'

const page = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar />

      <div className="w-full lg:w-3/4">
        <h1 className="text-3xl md:text-5xl lg:text-7xl p-4 mt-8 lg:mt-16">
          <b>Analytics</b>
        </h1>
        <div className="ml-4 md:ml-7">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Analytics</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  )
}

export default page