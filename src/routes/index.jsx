import React from 'react';
import { Link as RouteLink } from 'react-router-dom';

import CatHolyWater from 'assets/imgs/cat_holy_water.jpg';
import CatScratcher from 'assets/imgs/cat_scratcher.jpg';
import CatSandbox from 'assets/imgs/cat_sandbox.jpg';
import PetHotelBanner from 'assets/imgs/pet_hotel_banner.jpg';
// import PirateCat from 'assets/imgs/pirate_cat.jpg';
import VetDog from 'assets/imgs/vet_dog.jpg';
import WashDogs from 'assets/imgs/wash_dogs.jpg';

import Footer from 'components/Footer';
import LandingArea from 'components/LandingArea';
import Navbar from 'components/Navbar';
import Promotion from 'components/Promotion';
import SeparatorTitle from 'components/SeparatorTitle';
import {
  Content,
  Page,
  PromotionsContainer,
} from 'components/styles';
import { PromotionsBanner } from '../components/styles';

const Index = () => (
  <Page>
    <Navbar />
    <Content>
      <LandingArea />
      <SeparatorTitle
        label="Serviços"
        text="Marque um check-up!"
      />
      <PromotionsContainer>
        <div>
          <Promotion
            label="Banho e Tosa"
            text="Para cães e gatos"
            color="#3498db"
            image={WashDogs}
          />
        </div>
        <div>
          <Promotion
            label="Veterinário"
            text="Exames e cirurgias"
            color="#9E9D24"
            image={VetDog}
          />
        </div>
      </PromotionsContainer>
      <SeparatorTitle
        label="Produtos"
        text="Preparamos estas promoções especiais! (Vence em 05/06/2018)"
      />
      <PromotionsContainer>
        <div>
          <Promotion
            label="Arranhador para gatos"
            text="De R$200,00 por apenas"
            priceTag="R$199,00"
            color="#c62828"
            image={CatScratcher}
            to="/shop/1"
          />
        </div>
        <div>
          <Promotion
            label="Banheiro para gatos"
            text="De R$999,00 por apenas"
            priceTag="R$998,99"
            color="#F9A825"
            image={CatSandbox}
            to="/shop/2"
          />
        </div>
        <div>
          <Promotion
            label="Bebedouro para gato"
            text="De R$0,00 por míseros"
            priceTag="R$-0,01"
            color="#6A1B9A"
            image={CatHolyWater}
            to="/shop/3"
          />
        </div>
      </PromotionsContainer>
      <SeparatorTitle
        label="Pet Hotel Las Vegas"
        text="Clique abaixo para saber mais!"
      />
      <RouteLink to="/pet-hotel">
        <PromotionsBanner src={PetHotelBanner} />
      </RouteLink>
    </Content>
    <Footer />
  </Page>
);

export default Index;
