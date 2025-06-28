import { render } from "@testing-library/react";
import PageContainer from "./PageContainer";

describe('PageContainer', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
      <PageContainer>
        <div>Test Child</div>
      </PageContainer>
    );
    
    expect(getByText('Test Child')).toBeInTheDocument();
  });
});