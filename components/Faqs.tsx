// components/faqs/FAQSWrapper.tsx
'use client';

import FAQS from './faqs/FAQS';
import useFAQS from './faqs/useFAQS';

export default function FAQSWrapper() {
  const data = useFAQS();

  return <FAQS data={data} />;
}
