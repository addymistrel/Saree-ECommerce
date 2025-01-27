import { Card, CardHeader, CardBody, Image } from "@heroui/react";

export default function ProductCard() {
  return (
    <Card className="py-4">
      <CardBody className="overflow-visible py-2">
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src="https://www.fabodisha.com/cdn/shop/files/InShot-20240321_165445556.jpg?v=1711021792&width=1080"
        />
      </CardBody>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Price : ₹ 2000</p>
        <small className="text-default-500">Womenswear</small>
        <h4 className="font-bold text-large">Sambalpuri Saree</h4>
      </CardHeader>
    </Card>
  );
}
