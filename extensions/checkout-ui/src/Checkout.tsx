import { useEffect, useState } from 'react';
import {
  Banner,
  useApi,
  useTranslate,
  reactExtension,
  Checkbox,
  InlineLayout,
  Image,
  BlockStack,
  Text,
  Pressable,
  Heading,
  BlockSpacer,
  Divider,
  useCartLines,
  useApplyCartLinesChange,
  InlineStack,
  View,
  BlockLayout,
  List,
  ListItem
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  "purchase.checkout.cart-line-list.render-after",
  () => <Extension />,
);

function Extension() {
  const { query } = useApi();

  const [agreed, setAgreed] = useState(false);

  return (
    <>
      <Divider />
      <BlockSpacer spacing={'base'} />
      <Heading level={2}>Términos y condiciones</Heading>
      <BlockLayout>
        
        <List >
          <ListItem> Tiempo entrega Santo Domingo: De 1 a 2 días laborables. [Puerta a Puerta]</ListItem>
          <ListItem> Tiempo entrega Interior del país: De 3 a 5 días laborables. [MetroPac, Vimenpaq o CaribeTours]</ListItem>
          <ListItem> Una vez procesada la orden, no se permiten cambios ni cancelación.</ListItem>
          <ListItem> No disponemos de una hora de entrega exacta.</ListItem>
          <ListItem> Si nuestro colaborador tiene alguna pregunta sobre la ubicación, te contactará vía WhatsApp desde otro número.</ListItem>
          <ListItem> Laboramos de Lunes a Viernes de 10:00AM a 5:00PM</ListItem>
        </List>
        
      </BlockLayout>
      <BlockSpacer spacing={'base'} />
      <Divider />
    </>
  );
}
