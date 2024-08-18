export default function BookList() {
   let pageTitle = "Make you Smarter Books";
   let book1 = "https://m.media-amazon.com/images/I/71WWw6d85JL._SL1500_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/71jWgemHbML._SL1200_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/61UZS3QA1UL._SL1500_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Intelligent Investor" />
         <img src={book2} alt="Art Of War!" />
         <img src={book3} alt="48 Law of power" />
      </div>      
   );
}