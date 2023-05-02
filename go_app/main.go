// Created By: Lamees Hemdan
// Created On: May 2023
//
// This file contains the main function for the go_app application.

package main

import (
	"fmt"
)

func main() {
	// This program gets the age and let the person know which movies they can watch.
	var age string

	// input
	fmt.Println("Enter your age: ")
	fmt.Scanln(&age)

	if-else age >= "17" {
		fmt.Println("You can watch R rated movies!")
	} else if age >= "13" {
		fmt.Println("You can watch PG-13 movies!")
	} else if age >= "5" {
		fmt.Println("Go!")
	} else {
		fmt.Println("Sorry, you are too young for most movies.")
	}

	fmt.Println("\nDone.")
}
