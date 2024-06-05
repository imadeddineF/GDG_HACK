import { type Metadata } from 'next';

interface GenerateMetadataProps {
  titleKey?: any;
  descriptionKey?: any;
}

export async function GenerateMetadata({
  titleKey,
  descriptionKey,
}: GenerateMetadataProps): Promise<Metadata> {
  return {
    title: titleKey,
    description: descriptionKey,
  };
}
