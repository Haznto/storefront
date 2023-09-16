// import React, { createContext, useEffect } from "react";
// import { setActiveCategory, setCategories, setProducts, setRenderList } from "../../Reducers/CategoryReducer";
// import axios from "axios";
// import { connect } from "react-redux";

// export let CategoryContext = createContext()

// function CategoryProvider(props) {

//     useEffect(() => {
//         async function Categories() {
//             try {

//                 let data = await axios.get(`https://api-js401.herokuapp.com/api/v1/categories`)
//                 // dispatch({ type: 'SET-CURRENT-CATEGORY', payload: data.data.results })
//                 props.setCategories(data.data.results)
//             } catch (err) {
//                 console.log(err)
//             }
//         }
//         async function Products() {
//             try {

//                 let data = await axios.get(`https://api-js401.herokuapp.com/api/v1/products`)
//                 // dispatch({ type: 'SET-CURRENT-PRODUCT', payload: data.data.results })
//                 // dispatch({ type: 'SET-ACTIVE-CATEGORY', payload: 'electronics' })

//                 props.setProducts(data.data.results)
//                 props.setActiveCategory('electronics')
//             } catch (err) {
//                 console.log(err)
//             }
//         }

//         Categories()
//         Products()

//     }, [])
//     useEffect(() => {
//         async function setToRenderProducts() {
//             try {

//                 let toRender = props.productManager.categoryReducer.products.filter(element => element.category === props.productManager.categoryReducer.activeCategory)
//                 // dispatch({ type: 'SET-RENDER-PRODUCTS', payload: toRender })
//                 props.setRenderList(toRender)
//             } catch (err) {
//                 console.log(err)
//             }
//         }
//         setToRenderProducts()
//     }, [props.productManager.categoryReducer.activeCategory])


//     return (
//         <CategoryContext.Provider value={'nothing'}>
//             {props.children}
//         </CategoryContext.Provider>
//     )
// }

// const mapStateToProps = state => ({
//     productManager: state
// })
// const mapDispatchToProps = {
//     setActiveCategory,
//     setCategories,
//     setProducts,
//     setRenderList
// }
// export default connect(mapStateToProps, mapDispatchToProps)(CategoryProvider)