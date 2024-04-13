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
      <Heading level={2}> Terms and conditions </Heading>
      <BlockLayout>
        
        <List >
          <ListItem>All provided information is correct. By placing this order, I AGREE to the privacy policy, shipping policy, refund policy, and terms of service.</ListItem>
        </List>
        
      </BlockLayout>
      <BlockSpacer spacing={'base'} />
      <Divider />
    </>
  );
}
