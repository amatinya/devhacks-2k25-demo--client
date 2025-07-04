import { useMutation, useQueryClient } from "@tanstack/react-query";

import { axios } from "@/shared/api";
import { RQKeys } from "@/shared/constants";

import { useDocumentView } from "../hooks";

const useTemplateUploadMutation = () => {
  const queryClient = useQueryClient();
  const { removeDocument } = useDocumentView();

  return useMutation({
    mutationFn(file: File) {
      const formData = new FormData();
      formData.append("template", file);
      return axios.post("/templates", formData, { headers: { "Content-Type": "multipart/form-data" } });
    },
    async onSuccess() {
      await queryClient.invalidateQueries({ queryKey: [RQKeys.TEMPLATES] });
      removeDocument();
    },
  });
};

export default useTemplateUploadMutation;
