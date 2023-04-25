import React from 'react'
import style from './DetailRules.module.scss'

const DetailRules: React.FC = () => {

    let thead = ['EU', 'UK', 'CM', 'US']
    let tbody = [
        ['36', '6.5', '5.5', '245'],
        ['40', '7', '6', '250'],
        ['41', '8', '7', '255'],
        ['42', '8.5', '7.5', '260'],
        ['43', '9', '8', '265'],
        ['44', '10', '9', '270'],
        ['45', '10.5', '9.5', '275'],
        ['46', '11', '10', '280'],
        ['46', '12', '11', '285'],
    ]
    return (
        <div className={style['Rules']}>
            <div className={style['cell']}>
                <div className={style['cell_title']}>
                    <span>尺码对照表</span>
                </div>

            </div>
            <table>
                <tbody>  
                    <tr>
                    {
                        thead.map((item,index) => {
                            return (
                                    <th key={index}>{item}</th>
                            )
                        })
                    }
                    </tr>
                    {
                        tbody.map((tr, index) => {
                            return (
                                <tr key={index}>
                                        {
                                            tr.map((item,index) => {
                                                return (
                                                    <td key={index}>{item}</td>
                                                )
                                            })
                                        }
                                </tr>

                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default DetailRules