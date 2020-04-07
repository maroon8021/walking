import * as React from "react"
import { EmployeeItem } from "@s/assets/works/faceted-navigation/employee-data"

/** @jsx jsx */
import { css, jsx } from "@emotion/core"

type ListProps = {
  listHeader: string[]
  listData: EmployeeItem[]
}

const tableStyle = css`
  background-color: #fff;
  box-shadow: 10px 10px 29px -17px rgba(0, 0, 0, 0.75);
`

const thStyle = css`
  padding: 2rem;
  border-bottom: 1px solid #e0e0e0;
`

const trStyle = css`
  transition: all 0.5s;
  &:hover {
    background-color: #eee;
  }
`

const tdStyle = css`
  padding: 2rem;
  border-bottom: 1px solid #e0e0e0;
`

const List: React.FC<ListProps> = ({
  listHeader,
  listData,
}): React.ReactElement => {
  return (
    <table css={tableStyle}>
      <thead>
        <tr>
          {listHeader.map((head, index) => {
            return (
              <th css={thStyle} key={`${head}-${index}`}>
                {head}
              </th>
            )
          })}
        </tr>
      </thead>
      <tbody>
        {listData.map((data: any, index) => {
          const {
            id,
            employeeNo,
            name,
            age,
            gender,
            occupation,
            birthplace,
            enrollmentPeriod,
          } = data
          return (
            <tr key={`${id}`} css={trStyle}>
              {[
                employeeNo,
                name,
                age,
                gender,
                occupation,
                birthplace,
                enrollmentPeriod,
              ].map((item, itemIndex) => {
                return (
                  <td css={tdStyle} key={`${id}-${item}-${index}-${itemIndex}`}>
                    {item}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default List
