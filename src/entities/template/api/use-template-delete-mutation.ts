import { useMutation, useQueryClient } from "@tanstack/react-query";

import { RQKeys } from "@/shared/constants";
import { useDocumentView } from "@/widgets/document-view";
import { axios } from "@/shared/api";
import type { ITemplate } from "@/app/types/global";

const useTemplateDeleteMutation = (template: ITemplate) => {
  const { removeDocument, documentView } = useDocumentView();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => axios.delete(`/templates/${template._id}`),
    async onSuccess() {
      if (documentView.state === "template-preview" && documentView.file._id === template._id) {
        removeDocument();
      }
      await queryClient.invalidateQueries({ queryKey: [RQKeys.TEMPLATES] });
    },
  });
};

export default useTemplateDeleteMutation;
