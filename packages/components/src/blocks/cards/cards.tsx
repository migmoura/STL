import { createRoot } from "react-dom/client";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Button } from "@/components/ui/button.tsx";

export default function decorate(block: HTMLElement) {
  const [titleWrapper, contentWrapper, ctaWrapper] = block.children;
  const title = titleWrapper.textContent?.trim();
  const content = contentWrapper.textContent?.trim();
  const cta = ctaWrapper.textContent?.trim();

  const root = createRoot(block);
  root.render(
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter>
        <Button>{cta}</Button>
      </CardFooter>
    </Card>,
  );
}
