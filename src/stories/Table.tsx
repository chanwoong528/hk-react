import React from 'react'
import "./table.scss";

interface TableProps {

  type: string;
  numListToShow?: number;
  tableData: TableData[];

}
interface TableData {
  dateLabel: string;
  dayCode: string;
  newsletterList: NewsletterData[]
}

interface NewsletterData {
  time: string;
  name: string;
}



export const Table = ({ type = "newletter", numListToShow = 3, tableData, ...props }: TableProps) => {
  return (
    <div className={[`hk-table hk-table--${type}`].join(" ")} {...props}>
      {tableData.map((item) => {
        return <div className={`day-wrap ${item.dayCode}`}>
          <h3>{item.dateLabel}</h3>
          <ul>{item.newsletterList.map((news) => {
            if (!!news.name && !!news.time) {
              return <li>
                <span>{news.time}</span>
                <h4>{news.name}</h4>
              </li>
            }
            return <li></li>
          })}</ul>
        </div>
      })}
    </div>
  )
}

