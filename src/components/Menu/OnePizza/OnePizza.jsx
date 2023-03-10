import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import { productContext } from "../../../Context/ProductContextProvider"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

import { cartContext } from "../../../Context/CartContextProvider"
import { IconButton } from "@mui/material"
import "./OnePizza.css"
import { Nav } from "react-bootstrap"

export default function OnePizza({ item }) {
	const { addProductToCart, checkProductInCart } = useContext(cartContext)
	const navigate = useNavigate()

	console.log(addProductToCart)
	function goToCart() {
		navigate("/cart")
	}

	return (
		<Card
			className="card"
			sx={{
				maxWidth: 300,
				m: "1vw",
			}}
		>
			<CardMedia
				className="card-image"
				component="img"
				height="100"
				image={item.img}
				alt="Some photo📷"
			/>
			<CardContent className="card-block">
				<Typography
					className="card-title"
					gutterBottom
					variant="h6"
					component="div"
				>
					{item.title}
				</Typography>
				<Typography
					className="card-type"
					gutterBottom
					variant="body2"
					component="div"
				>
					{item.type}
				</Typography>
				<div className="aaa">
					<Typography
						variant="body3"
						className="card-desc"
						color="text.secondary"
					>
						{item.desc}
					</Typography>
				</div>
				<Typography className="card-price">{item.price} c.</Typography>
			</CardContent>

			<CardActions className="cart-action2">
				<IconButton
					variant="outlined"
					size="small"
					onClick={() => addProductToCart(item)}
				>
					<ShoppingCartIcon
						className="card-btn"
						color={checkProductInCart(item.id) ? "primary" : ""}
					/>
				</IconButton>
				<Nav.Link onClick={goToCart}>
					<Button className="buy-btn" variant="outlined">
						BUY
					</Button>
				</Nav.Link>
			</CardActions>
		</Card>
	)
}
