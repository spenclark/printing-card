import React from "react";
import CR80card from "../Assets/content/CR80-ID-card-size.webp";
import essentialcard from "../Assets/content/essentialcard.webp";

export const faqData = [
  {
    category: "Card Design",
    items: [
      {
        title: "What types of files can I upload?",
        body: `Currently, we accept graphic files with the following extensions:
        ${(
          <span style={{ fontWeight: "600" }}>
            .pdf, .doc, .docx, .zip, .jpg, .jpeg, .png, .psd, .cdr, .bmp
          </span>
        )}
        
        If you have something in a format other than that which is supported here, no problem. Simply contact us, and we’ll make sure that we get your template up and running ASAP.`,
        mediaType: "",
        media: "",
      },
    ],
  },
  {
    category: "Covid Related",
    items: [
      {
        title: "What is the COVID-19 Card Format?",
        body: `ID cards for COVID-19 are typically the same as standard “CR80” ID cards (the same size as a credit card). The only difference is that they indicate that the employee is essential during the pandemic. ${(
          <span style={{ fontWeight: "600" }}>
            `The CR80 dimensions are 3.375″ by 2.125″`
          </span>
        )}`,
        mediaType: "image",
        media: CR80card,
      },
      {
        title: "What is an Essential Worker ID Card?",
        body: `An essential worker ID card is an employee ID that indicates that the wearer is needed on-site, even during a pandemic. Often, in the case of medical staff and hospital workers, these employees are instrumental in fighting the pandemic. In these cases, it is important that they have an ID which clearly identifies them as essential, should they be stopped by law enforcement during a lock-down.`,
        mediaType: "image",
        media: essentialcard,
      },
    ],
  },
  {
    category: "Account Funding",
    items: [
      {
        title: "Why do I deposit money up-front?",
        body: ``,
        mediaType: "video",
        media: "ifHr_jDqm_M",
      },
    ],
  },
];

// {/* <ul>
// {/* <span>Advantages of a Prepaid Account</span> */}
// {/* <li>perfectly adapted to regular ID card ordering</li>
// <li>control your budget and simplify the accounting</li>s
// <span>A declining balance account</span>
// <li>Works just like the postage meter</li>
// <li>
//   Avoids the nuisance of tiny invoices each time you order one or
//   two cards.
// </li>
// <li>
//   Allows YOU to stay in control your ID card budget • Cards are
//   produced as long as you have a positive balance • You just fund
//   the account for the number of cards you plan to produce
// </li>
// <li>
//   No auto-debits – you are warned whenever there are insufficient
//   funds InstantCard makes ordering cards incredibly efficient!
// </li> */}
// {/* <span>Advantages of a Prepaid Account</span> */}
// </ul>
