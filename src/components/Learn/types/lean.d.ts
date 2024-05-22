interface ResourceType {
  type: String;
  title: String;
  desc: String;
  videoID: string;
  id: String;
}

interface CourseType {
  name: String;
  pricingINR: Number;
  recordId: String;
  sequence: Array<ResourceType>;
  thumbnailUrl: String;
}

interface packageType {
  courseId: String;
  currentIndex: number;
  orderCreationId: String;
  packagePurchasedPrice: String;
  packagePurchasedTime: String;
  razorpayPaymentId: String;
  recordId: String;
  userId: String;
}
