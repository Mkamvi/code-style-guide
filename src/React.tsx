/**
 * author iWuzhi
 * date 2021-12-07 23:05:33
 */

import React from 'react'

interface IProps {}

const ReactTsx: React.FC<IProps> = () => (
  <div
    className="4"
    id="3"
    onDoubleClick={() => {
      console.log(1)
    }}
  >
    你好
  </div>
)

export default ReactTsx
