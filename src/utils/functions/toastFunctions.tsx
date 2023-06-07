export const onSuccess = (toast: any, description: string) => {
  toast({
    title: description,
    status: "success",
    duration: 3000,
    isClosable: true,
  });
};

export const onFailure = (toast: any, description: string) => {
  toast({
    title: description,
    status: "error",
    duration: 3000,
    isClosable: true,
  });
};
