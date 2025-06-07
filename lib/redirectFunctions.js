import { useRouter } from "next/navigation";

export const redirectToProducts = () => {
  const router = useRouter();
  router.push("/products");
};
