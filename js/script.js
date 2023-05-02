// Copyright (c) 2023 Lamees Hemdan All rights reserved
//
// Created by: Lamees Hemdan
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked () {
  // This program gets the age and let the person know which movies they can watch.

  // input
  const age = parseInt(document.getElementById("age").value)

  // process
  if (age >= 17) {
    // output
    document.getElementById('age-entered').innerHTML = "You can watch R movies alone."
  }
  else if (age >= 13) {
    // output
    document.getElementById('age-entered').innerHTML = "You can watch PG-13 movies alone."
  }
  else if (age >= 5) {
    // output
    document.getElementById('age-entered').innerHTML = "You can watch G or PG movies alone."
  }
  else {
    // output
    document.getElementById('age-entered').innerHTML = "Sorry, you are too young for most things."
  }
}
