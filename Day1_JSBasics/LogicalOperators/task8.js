// A question about "if"

// Which of these alerts are going to execute?
// What will the results of the expressions be inside if(...)?

if (-1 || 0) alert( 'first' ); // first
if (-1 && 0) alert( 'second' ); // NO OUTPUT
if (null || -1 && 1) alert( 'third' ); // third

// if (-1 || 0) console.log( 'first' ); // first
// if (-1 && 0) console.log( 'second' ); // NO OUTPUT
// if (null || -1 && 1) console.log( 'third' ); // third