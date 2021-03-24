import React from "react";
import faqsData from "../fixtures/faqs.json";
import { Accordian } from "../components";

export function FaqsContainer() {
  return (
    <Accordian>
      <Accordian.Title>Frequenty Asked Questions</Accordian.Title>
      {faqsData.map((item) => {
        return (
          <Accordian.Item key={item.id}>
            <Accordian.Header>{item.header}</Accordian.Header>
            <Accordian.Body>{item.body}</Accordian.Body>
          </Accordian.Item>
        );
      })}
    </Accordian>
  );
}
