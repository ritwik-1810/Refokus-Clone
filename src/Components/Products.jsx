import React from 'react'
import Product from "./Product"

const Products = () => {

  let arr=[{val:"Arquil",discription:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent viverra, lorem eu suscipit tincidunt, urna sapien cursus orci, sed facilisis leo felis ac nunc. .",isTrue:false},{val:"Quilxz",discription:"skjb hdjfjj jknajfb bkbajdbf kjbgljeb kjbdfjlq hdvnnunv cisnfe alkhccnljb jbklkvnakln lzl mz lnlkvnskanekv",isTrue:true},
    {val:"twoipu",discription:"skjb hdjfjj jknajfb bkbajdbf kjbgljeb kjbdfjlq hdvnnunv cisnfe alkhccnljb jbklkvnakln lzl mz lnlkvnskanekv",isTrue:true},{val:"Ramse",discription:"skjb hdjfjj jknajfb bkbajdbf kjbgljeb kjbdfjlq hdvnnunv cisnfe alkhccnljb jbklkvnakln lzl mz lnlkvnskanekv",isTrue:false}
  ]

  return (
    <div>
    {
      arr.map((elem)=><Product val={elem.val} discription={elem.discription} isTrue={elem.isTrue}></Product>)
    }
    </div>
  )
}

export default Products