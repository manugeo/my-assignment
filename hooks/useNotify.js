import { useToast } from "@/components/ui/use-toast"

const useNotify = () => {
  const { toast } = useToast()
  const notify = (message = 'Sample Message', type = 'success') => {
    toast({
      variant: (type === 'error') ? 'destructive' : 'outline',
      title: message
    })
  }

  return { notify }
}

export default useNotify