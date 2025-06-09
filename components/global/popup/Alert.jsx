import { Button, Heading, Text } from "@/components";
import ReuseDialog from "./ReuseDialog";

const Alert = ({
  message = "Are you sure you want to delete this document permanently from the database?",
  heading = "Permanently delete document?",
  isOpen,
  handleclose,
  loading = false,
  showProceed = false,
  onProceed = () => {},
}) => {
  return (
    <ReuseDialog isOpen={isOpen} handleclose={handleclose}>
      <div className="w-full flex flex-col gap-[10px]">
        <Heading
          as="h5"
          level="h5"
          className="!text-[#000000D9] py-[1rem] border-b-[1px] border-[rgba(0,0,0,0.16)]"
        >
          {heading}
        </Heading>
        <Text className="min-h-[5rem] px-[16px]">{message}</Text>
        <div className="!text-[#000000D9] !mt-[10px]" />
        <div className="flex w-full justify-end gap-[16px] p-[15px_16px]">
          <Button variant="outline" onClick={handleclose} secondary>
            Close
          </Button>
          {showProceed && (
            <Button
              onClick={onProceed}
              loading={loading}
              type="submit"
              secondary
            >
              Proceed
            </Button>
          )}
        </div>
      </div>
    </ReuseDialog>
  );
};

export default Alert;
