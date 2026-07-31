// Variable annotations
let movieTitle: string = "RRR";
let releaseYear: number = 2022;
let wasSuccessful: boolean = true;

console.log("Movie:", movieTitle);
console.log("Release Year:", releaseYear);
console.log("Successful:", wasSuccessful);

// Function parameter and return type annotations
function getMovieInfo(title: string, year: number): string {
    return `${title} was released in ${year}.`;
}

console.log(getMovieInfo(movieTitle, releaseYear));

// Array annotation
let leadActors: string[] = [
    "Ram Charan",
    "N. T. Rama Rao Jr.",
    "Alia Bhatt",
    "Ajay Devgn"
];

console.log("Lead Actors:");

leadActors.forEach((actor: string) => {
    console.log(actor);
});

export {};