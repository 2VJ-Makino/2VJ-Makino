'use strict'
// 1行目に記載している 'use strict' は削除しないでください


console.log(inputValue);

let calcNumber =`
Please Input Calc Number
Sqaure->1
Rectangle->2
Parallelogram->3
Trapezoid->4
Triangle->5
Circle->6
RectanglarSolid->7
Cube->8
RightCicularCylinder->9
Sphere->10
RightCicularCone->11
Squre or RectanglePyramid->12
Frustum of RightCicularCone->13
`;

let selectedNumber = prompt( calcNumber );

switch ( selectedNumber ){
    case "1":
        console.log( "Sqaure" );
        break;
    case "2":
        console.log( "Rectangle" );
        break;
    case "3":
        console.log( "Parallelogram" );
        break;
    case "4":
        console.log( "Trapezoid" );
        break;
    case "5":
        console.log( "Triangle" );
        break;
    case "6":
        console.log( "Circle" );
        break;
    case "7":
        console.log( "RectanglarSolid" );
        break;
    case "8":
        console.log( "Cube" );
        break;
    case "9":
        console.log( "RightCicularCylinder" );
        break;
    case "10":
        console.log( "Sphered" );
        break;
    case "11":
        console.log( "RightCicularCone" );
        break;
    case "12":
        console.log( "Squre or RectanglePyramid" );
        break;
    case "13":
        console.log( "Frustum of RightCicularConed" );
        break;
    default:
        console.log( "Please input number between 1 to 13" );
}

console.log( calcNumber );

// Call Sqaure
// Square(10); //  A = 100, P = 40

// Call Rectangle
// Rectangle( 10, 20 );    // A = 200, P = 60

// Call Parallelogram
// Parallelogram( 5, 30 );    // A = 150, P = 70 

// Call Trapezoid 
// Trapezoid ( 5, 10, 2, 8 , 7);    // A = 175, P = 25

// Call Triangle 
// Triangle( 4, 5, 7, 6 ); // A = 21, P = 16

// Call Circle
// Circle( 4, 8 ); // A = 50.2654824574, P = 25.1327412287

// Call RectanglarSolid
// RectanglarSolid( 2, 4, 8 ); // V = 64, (S) = 84

// Call Cube 
// Cube( 3 ); // V = 29, (S) = 54

// Call RightCicularCylinder
// RightCicularCylinder( 5, 20 ); // V = 1570.79632679, (S) = 785.398163397

// Call Sphere
// Sphere( 5 ); // V = 523.598775598, (S) = 1570.79632679

// RightCicularCone
// RightCicularCone( 10, 15 ); //V = 1570.79632679, (S) = 566.358669957

// SqureOrRectanglePyramid
// SqureOrRectanglePyramid( 5, 10, 15 ); // V = 250, (S) = 275

// FrustumOfRightCicularCone
// FrustumOfRightCicularCone( 5, 7, 10, 15 )   // V = 1282.81700022, (S) = 706.858347058

//Areas and Perimeters

//Figure Sqaure
function Square(s){

    //s
    console.log( "s =", s );

    //Area
    console.log( "Square's Area =",  s ** 2 );
    //Permeter
    console.log( "Square's Perimeter =",  4 * s );

}

//Figure Rectangle
function Rectangle( l , w ){


    //l
    console.log( "l =", l );
    //w
    console.log( "w =", w );

    //Area
    console.log( "Rectangle's Area =",  l * w );
    //Permeter
    console.log( "Rectangle's Perimeter =" ,  ( 2 * l ) + ( 2 * w ));

}

//Figure Parallelogram
function Parallelogram( l , w ){

    //l
    console.log( "l =", l );
    //w
    console.log( "w =", w );

    //Area
    console.log("Parallelogram's Area =",  l * w );
    //Permeter
    console.log("Parallelogram's Perimeter =",  ( 2 * l ) + ( 2 * w ));

}

//Figure Trapezoid 
function Trapezoid( s1, s2, b1, b2, h ){

    //s1
    console.log( "s1 =", s1 );
    //s2
    console.log( "s1 =", s2 );
    //b1
    console.log( "b1 =", b1 );
    //b2
    console.log( "b2 =", b2 );
    //h
    console.log( "b2 =", b2 );

    //Area
    console.log( "Trapezoid's Area =", 0.5 * h * ( b1 + b2 ));
    //Permeter
    console.log( "Trapezoid's Perimeter =", s1 + s2 + b1 + b2 );

}

//Figure Triangle 
function Triangle( s1, s2, b, h ){

    //s1
    console.log( "s1 =", s1 );
    //s2
    console.log( "s1 =", s2 );
    //b1
    console.log( "b =", b );
    //h
    console.log( "b2 =", h );

    //Area
    console.log( "Triangle's Area =", 0.5 * h * b );
    //Permeter
    console.log( "Triangle's Perimeter =", s1 + s2 + b );

}

//Figure Circle
function Circle( r , d ){

    //r
    console.log( "r =", r );
    //d
    console.log( "d =", d );

    //Area
    console.log( "Circle's Area =", Math.PI * r ** 2 );
    //Permeter
    console.log( "Circle's Perimeter =", Math.PI * d );
}



//Volumes and Surface Areas of Three- Dimensional Figures

//Figure RectanglarSolid
function RectanglarSolid( l, w, h ){

    //l
    console.log( "l =", l );
    //w
    console.log( "w =", w );
    //h
    console.log( "h =", h );

    //Volume
    console.log( "RectanglarSolid's Volume =", l * w * h );
    //Surface Area(S)
    console.log( "RectanglarSolid's (S) =", ( 2 * l * h ) + ( 2 * w * h ) + ( 2 * w * l ));
}

//Figure Cube
function Cube( s ){

    //s
    console.log( "s =", s );

    //Volume
    console.log( "Cube's Volume =", s ** 3 );
    //Surface Area(S)
    console.log( "Cube's (S) =", 6 * ( s ** 2 ));
}

//Figure RightCicularCylinder
function RightCicularCylinder( r, h ){

    //r
    console.log( "r =", r );
    //h
    console.log( "h =", h );

    //Volume
    console.log( "RightCicularCylinder's Volume =", Math.PI * ( r ** 2 ) * h );
    //Surface Area(S)
    console.log( "RightCicularCylinder's (S) =", ( 2 * Math.PI ) * ( r * h ) + ( 2 * Math.PI * ( r ** 2 )));
}

//Figure Sphere
function Sphere( r ){

    //r
    console.log( "r =", r );

    //Volume
    console.log( "Sphere's Volume =", ( 4 / 3 ) * Math.PI * ( r ** 3 ));
    //Surface Area(S)
    console.log( "Sphere's (S) =", 4 * Math.PI  * ( r ** 3 ));
}


//Figure RightCicularCone
function RightCicularCone( r, h ){

    //r
    console.log( "r =", r );
    //h
    console.log( "h =", h );

    //Volume
    console.log( "RightCicularCone's Volume =", ( 1 / 3 ) * Math.PI * ( r ** 2 ) * h );
    //Surface Area(S)
    console.log( "RightCicularCone's (S) =", Math.PI *  (r * Math.sqrt(( r ** 2 ) + ( h ** 2 ))));
}

//Figure SqureOrRectanglePyramid
function SqureOrRectanglePyramid( l, w, h ){

    //l
    console.log( "l =", l );
    //w
    console.log( "w =", w );
    //h
    console.log( "h =", h );

    //Volume
    console.log( "Squre or RectanglePyramid's Volume =", ( 1 / 3 ) * l * w * h );
    //Surface Area(S)
    console.log( "Squre or RectanglePyramid's (S) =", (  w * h ) + (  l * h )  + ( l * w ));
}

//Figure FrustumOfRightCicularCone
function FrustumOfRightCicularCone( r, h, R, s ){

    //r
    console.log( "r =", r );
    //h
    console.log( "h =", h );
    //R
    console.log( "R =", R );
    //s
    console.log( "s =", s );

    //Volume
    console.log( "Frustum of RightCicularCone's Volume =", ( 1 / 3 ) * (( Math.PI * h ) * (( r ** 2 ) + ( r * R ) + ( R ** 2 ))));
    //Surface Area(S)
    console.log( "Frustum of RightCicularCone's (S) =", Math.PI *  s * ( R + r ));
}