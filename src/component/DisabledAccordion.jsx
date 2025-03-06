import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function DisabledAccordion() {
  return (
    <div>
      <Accordion className="text-xl">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span" className="text-lg">
            Which language should I use for coding?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="text-lg">
            You can begin with any language but the preferred languages are
            C/C++ and Java. These languages are easy to learn and very fast to
            execute.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">
            Which programming language is preferable between c++/java?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Both C++ and Java are high-level languages, and both have their pros
            and cons. C++ is known for high-performance, speed, and memory
            management. While Java is known for platform independence. Overall,
            C++ is a simple language and is much easier to write code in C++
            than in Java. If you prefer competitive programming over development
            then C++ is preferable as it is a fast language whereas for
            Development you must prefer Java.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* 3 */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">
            What are various events organised by Computer Engineering Society?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Computer Engineering Society organizes several events in the session
            for the benefit of freshmen and the sophomores for e.g. Games of
            Code, Introduction to Programming Test Series, Wield the Web,
            Capture the Flag, Codesmasher and many more.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* 4 */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">
            What is the objective of CES?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Computer Engineering Society challenges the boundaries of knowledge,
            research, and disciplines and enables our budding engineering
            graduates to be exceptional individuals equipped to address arduous
            charges and promote overall personality development.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
