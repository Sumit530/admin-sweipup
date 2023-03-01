import React, { useState, useEffect } from 'react'
import {MdAccountBox} from "react-icons/md"
import {GoReport} from "react-icons/go"
import {CgRemove} from "react-icons/cg"
import {AiOutlineUserAdd} from "react-icons/ai"
import CTA from '../components/CTA'
import InfoCard from '../components/Cards/InfoCard'
import ChartCard from '../components/Chart/ChartCard'
import { Doughnut, Line } from 'react-chartjs-2'
import ChartLegend from '../components/Chart/ChartLegend'
import PageTitle from '../components/Typography/PageTitle'
import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon } from '../icons'
import RoundIcon from '../components/RoundIcon'
import response from '../utils/demo/tableData'
import SectionTitle from '../components/Typography/SectionTitle'
import {AiFillEye} from "react-icons/ai"
import {AiOutlinePlus} from "react-icons/ai"
import {FaDollarSign} from "react-icons/fa"
import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Avatar,
  Badge,
  Pagination,
  Button
} from '@windmill/react-ui'

import {
  doughnutOptions,
  lineOptions,
  doughnutLegends,
  lineLegends,
} from '../utils/demo/chartsData'

function Dashboard() {
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])

  // pagination setup
  const resultsPerPage = 10
  const totalResults = response.length

  // pagination change control
  function onPageChange(p) {
    setPage(p)
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage))
  }, [page])

  return (
    <>
      <PageTitle>Home</PageTitle>
      {/* <Button style={{right:400,bottom:20}} layout="link" size="icon" aria-label="Edit" className='rounded-full w-20 h-20  bottom-0 bg-blue-500  absolute '>
                      < AiOutlinePlus className="w-5 h-5 border-none text-white text-3xl " aria-hidden="true" />
                    </Button> */}
      {/* <!-- Cards --> */}
      <div className="grid gap-4 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="Total Users" value="6389">
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>
        <InfoCard title="New Users" value="376">
          <RoundIcon
            icon={AiOutlineUserAdd}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="Active Users" value="350">
          <RoundIcon
            icon={MdAccountBox}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          />
        </InfoCard>
        <InfoCard title="Ads Watch" value="1260">
          <RoundIcon
            icon={FaDollarSign}
            iconColorClass="text-teal-100 dark:text-teal-100"
            bgColorClass="bg-teal-400 dark:bg-teal-500"
            className="mr-4"
          />
        </InfoCard>
      </div>
      <SectionTitle>Team Members</SectionTitle>
      <TableContainer>
        <Table>
          <TableHeader>
            <tr>
              <TableCell>Members</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Action</TableCell>
            </tr>
          </TableHeader>
          <TableBody>
            {data.map((user, i) => (
              <TableRow key={i}>
                <TableCell>
                  <div className="flex items-center text-sm">
                    <Avatar className="hidden mr-3 md:block" src={user.avatar} alt="User image" />
                    <div>
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{user.job}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-sm">{new Date(user.date).toLocaleDateString()}</span>
                </TableCell>
                <TableCell>
                <div className="flex items-center space-x-4 bg-none border-transparent">
                    <Button layout="link" size="icon" aria-label="Edit" className='border-none bg-transparent'>
                      <CgRemove className="w-5 h-5 border-none" aria-hidden="true" />
                    </Button>
                  </div>
                </TableCell>
              
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            label="Table navigation"
            onChange={onPageChange}
          />
        </TableFooter>
      </TableContainer>

      <PageTitle>Charts</PageTitle>
      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <ChartCard title="Revenue">
          <Doughnut {...doughnutOptions} />
          <ChartLegend legends={doughnutLegends} />
        </ChartCard>

        <ChartCard title="Traffic">
          <Line {...lineOptions} />
          <ChartLegend legends={lineLegends} />
        </ChartCard>
      </div>
    </>
  )
}

export default Dashboard
