import { MenuItem, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import { Link, NavLink, useNavigate } from "react-router-dom"
import logo from "../../assets/img/logo.svg"
import "./NavBar.css"

export const NavBar = () => {
	const [activeLink, setActiveLink] = useState("home")
	const [scrolled, setScrolled] = useState(false)

	const [anchorElNav, setAnchorElNav] = React.useState(null)
	const [anchorElUser, setAnchorElUser] = React.useState(null)

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget)
	}
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	const handleCloseUserMenu = () => {
		setAnchorElUser(null)
	}

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}
		}

		window.addEventListener("scroll", onScroll)

		return () => window.removeEventListener("scroll", onScroll)
	})

	const pages = [
		{ name: "Home", link: "/home", id: 1 },
		{ name: "How we make pizza", link: "/make", id: 2 },
		{ name: "Menu", link: "/menu", id: 3 },
		{ name: "Reviews", link: "/reviews", id: 4 },
		{ name: "Contacts", link: "/contacts", id: 5 },
	]

	const navigate = useNavigate()

	function goToMenu() {
		navigate("/menu")
	}

	function goToMake() {
		navigate("/make")
	}

	function goToReviews() {
		navigate("/reviews")
	}

	// function goToDelivery() {
	// 	navigate("/delivery")
	// }

	function goToContacts() {
		navigate("/contacts")
	}

	return (
		<Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
			<Container>
				<Navbar.Brand>
					<NavLink to="/">
						<img src={logo} alt="Logo" />
					</NavLink>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav">
					<span className="navbar-toggler-icon"></span>
				</Navbar.Toggle>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link
							onClick={goToMake}
							className={
								activeLink === "make" ? "active navbar-link" : "navbar-link"
							}
						>
							How we make pizza
						</Nav.Link>
						<NavLink to="/menu"></NavLink>
						<Nav.Link
							// to="/menu"
							// href="/menu"
							onClick={goToMenu}
							className={
								activeLink === "menu" ? "active navbar-link" : "navbar-link"
							}
						>
							Menu
						</Nav.Link>
						<Nav.Link
							onClick={goToReviews}
							// to="/reviews"
							// href="#"
							className={
								activeLink === "reviews" ? "active navbar-link" : "navbar-link"
							}
						>
							Reviews
						</Nav.Link>
						{/* <Nav.Link
							onClick={goToDelivery}
							// to="/delivery"
							// href="#"
							className={
								activeLink === "delivery" ? "active navbar-link" : "navbar-link"
							}
						>
							Delivery
						</Nav.Link> */}
						<Nav.Link
							onClick={goToContacts}
							// to="/contacts"
							// href="#"
							className={
								activeLink === "contacts" ? "active navbar-link" : "navbar-link"
							}
						>
							Contacts
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}
