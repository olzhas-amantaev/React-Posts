import React from "react";
import classes from "./MyButton.module.css";

export default function MyButton({ children, ...props }) {
	return (
		<div {...props} className={classes.myBtn}>
			{children}
		</div>
	);
}
