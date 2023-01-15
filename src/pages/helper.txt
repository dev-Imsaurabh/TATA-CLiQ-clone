Some impotant points you need to keep in mind:

1- return <Box> first in every page having className="container" (this will ensure page 
   should have top-margin 120px so that page should not hide itself behind navbar)

     eg: import "../styles/style.css" (class container is defined inside style.css)

          return <Box className="container"> 

                    //rest of the page contents

                 </Box>