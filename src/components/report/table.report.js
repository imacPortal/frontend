import React, { Component } from 'react'

export class TableComponent extends Component {
    render() {
        return (
            <table border='1'>
                <tr>
                    <td>
                        Name
                    </td>
                    <td>
                        Reg. No/Employee Id
                    </td>
                    <td>
                        Date
                    </td>
                    <td>
                        Slots
                    </td>
                    <td>
                        Lab
                    </td>
                    <td>
                        No. Of Students
                    </td>
                    <td>
                        Subject
                    </td>
                    <td>
                        Reason
                    </td>
                    <td>
                        System serial No.
                    </td>
                </tr>
                {
                    this.props.report.length !== 0 &&
                    this.props.report.reverse().map(r=>
                        <tr align="left">
                            <td>
                                {r.name}
                            </td>
                            <td>
                                {r.regNo}
                            </td>
                            <td>
                                {r.date}
                            </td>
                            <td>
                                {r.slots}
                            </td>
                            <td>
                                {r.lab}
                            </td>
                            <td>
                                {r.noOfStuds}
                            </td>
                            <td>
                                {r.subject}
                            </td>
                            <td>
                                {r.reason}
                            </td>
                            <td>
                                {r.system.map(s=>`${s}, `)}
                            </td>
                        </tr>
                    )
                }
            </table>
        )
    }
}

export default TableComponent


// import React from 'react'

// function TableComponent({report}) {
//     return (
//         <table border='1'>
//             <tr>
//                 <td>
//                     Name
//                 </td>
//                 <td>
//                     Reg. No/Employee Id
//                 </td>
//                 <td>
//                     Date
//                 </td>
//                 <td>
//                     Slots
//                 </td>
//                 <td>
//                     Lab
//                 </td>
//                 <td>
//                     No. Of Students
//                 </td>
//                 <td>
//                     Subject
//                 </td>
//                 <td>
//                     Reason
//                 </td>
//                 <td>
//                     System serial No.
//                 </td>
//             </tr>
//             {
//                 report.length !== 0 &&
//                 report.reverse().map(r=>
//                     <tr align="left">
//                         <td>
//                             {r.name}
//                         </td>
//                         <td>
//                             {r.regNo}
//                         </td>
//                         <td>
//                             {r.date}
//                         </td>
//                         <td>
//                             {r.slots}
//                         </td>
//                         <td>
//                             {r.lab}
//                         </td>
//                         <td>
//                             {r.noOfStuds}
//                         </td>
//                         <td>
//                             {r.subject}
//                         </td>
//                         <td>
//                             {r.reason}
//                         </td>
//                         <td>
//                             {r.system.map(s=>`${s}, `)}
//                         </td>
//                     </tr>
//                 )
//             }
//         </table>
//     )
// }

// export default TableComponent
