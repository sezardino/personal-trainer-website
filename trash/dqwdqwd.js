// import { graphql } from "gatsby";
// import React from "react";
// import ContactForm from "../components/contact-form";
// import Layout from "../components/Layout";
// import Social from "../components/social";

// const Contact = ({ data }) => {
//   const fields = data.markdownRemark.frontmatter.contact;

//   return (
//     <Layout>
//       <section className="contact">
//         <div className="container contact__container">
//           <div className="contact__wrapper">
//             <h1 className="contact__title">Kontakt</h1>
//             <p className="contact__text">
//               Skontaktuj się ze mna i coś tam jeszcze będzie napisane jeszcze
//               będzie napisane jeszcze będzie napisane.
//             </p>
//             <div className="contact__form">
//               <ContactForm />
//             </div>
//           </div>
//           <div className="contact__data">
//             <div className="contact__contact-data">
//               <p className="contact__field">
//                 Mail:
//                 <a href={`mailto:${fields.mail}`} className="contact__info">
//                   {fields.mail}
//                 </a>
//               </p>
//               <p className="contact__field">
//                 Telefon:
//                 <a href={`tel:${fields.tel}`} className="contact__info">
//                   {fields.tel}
//                 </a>
//               </p>
//             </div>
//             <div className="contact__social">
//               <Social />
//             </div>
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// const query = graphql`
//   {
//     markdownRemark(fileAbsolutePath: { regex: "/data.md/" }) {
//       frontmatter {
//         contact {
//           mail
//           tel
//           social {
//             link
//             name
//             icon {
//               publicURL
//             }
//           }
//         }
//       }
//     }
//   }
// `;

// export { query };
// export default Contact;
