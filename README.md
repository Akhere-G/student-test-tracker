I chose React for the frontend as it is one of my expertises. Styled-components is used for the styling efficiently.

The app is broken down into four components, the pagination component, the filter, the add record form, and the list of records. This allowed the core functionality to be implemented easily and data to be shared from the App component to each section of the App efficiently. If the app was larger, redux would have been used to store state but simple react hooks were enough for a project of this size. Flexbox is used for positioning the different sections.

First, I fetch the list of records from a file and then filter it. After filtering the list, the list is sorted. Finally the list is split into pages. A filtered list and a sorted list are saved in state. With the filtered list saved, users can sort the list without the app having to filter it each time, saving on performance.

A table is used to display the records in an easy to read fashion.
