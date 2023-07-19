import React from 'react';
import Accordion from './Accordion';
import './Accordion.css';

const App = () => {
  return (
    <div>
      <Accordion
        title="Książę Harry i Meghan Markle PRZEBILI księcia Williama i księżną Kate"
        content="Nie da się ukryć, że Księżna Kate i książę William cieszą się o wiele 
        większą popularnością, niż książę Harry i Meghan Markle. A mimo to jest jeden aspekt,
         w którym Sussexowie górują nad Williamem i Kate. Królewska ekspertka Daniela Elser wyznała, 
         że różnica między nimi jest kolosalna. Jak się okazuje, chodzi o liczbę zdjęć zrobionych przez fotoreporterów."
      />

      <Accordion
        title="Joanna Opozda i Remigiusz Mróz znów flirtują"
        content="Barbie to niewątpliwie jeden z najgorętszych filmów tego roku. 
        W ostatnich dniach media co rusz obiegały zdjęcia z kolejnych przedpremierowych 
        imprez promujących głośny obraz z Margot Robbie i Ryanem Goslingiem w rolach głównych.
         Na jednym z eventów pojawili się nawet Andziaks z Luką."
      />

      <Accordion
        title="Sebastian Fabijański w OBSTAWIE OCHRONIARZA robi zegarkowe zakupy za prawie 400 tysięcy"
        content="Niedawno Sebastian został spostrzeżony przez paparazzo, gdy akurat parkował w okolicach 
        Krakowskiego Przedmieścia w samym centrum Warszawy. Prędko okazało się, że celem jego podróży był 
        salon producenta biżuterii. Na Instagramie Seba poinformował, że dokonał właśnie inwestycji w postaci 
        zakupu zegarka marki Patek Philippe za bagatela 380 tysięcy złotych."
      />
    </div>
  );
};

export default App;
