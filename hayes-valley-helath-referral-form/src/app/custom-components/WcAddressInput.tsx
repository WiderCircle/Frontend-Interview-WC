import React from 'react';
import PlacesAutocomplete, { geocodeByPlaceId } from 'react-places-autocomplete';
import WcTextField from './WcTextField';
import { Box, List, ListItem, ListItemButton } from '@mui/material';
import { Wrapper } from '@googlemaps/react-wrapper';
import { config } from '../config';

interface WcAddressInputProps {
    onChange: (newValue: string) => void;
    onAddressSelect: (addressInfo: AddressInfo) => void;
    address: string;
}

export interface AddressInfo {
    address?: string,
    city?: string,
    state?: string,
    zip?: number | string,
    country?: string,
}

const styles = {
    container: {
        position: 'relative',
        zIndex: 999,
    },
    dropdownContainer: {
        maxHeight: '110px',
        overflow: 'scroll',
        position: 'absolute',
        backgroundColor: '#fff',
        width: '100%',
        boxShadow: '0px 1px 10px 1px rgba(0,0,0,0.25)',
    },
    listItem: {
        '&:hover, &:focus': {
            backgroundColor: '#CDE7ED',
        },
    },
};

const WcAddressInput: React.FC<WcAddressInputProps> = ({ onAddressSelect, onChange, address }) => {
    const handleChange = (newAddress: string) => {
        onChange(newAddress);
    };

    const handleSelect = async (address: string, placeId: any) => {
        const [place] = await geocodeByPlaceId(placeId);
        const addressInfo: AddressInfo = {
            address: place.formatted_address,
            city: place.address_components.find(c => c.types.includes('locality'))?.long_name,
            state: place.address_components.find(c => c.types.includes('administrative_area_level_1'))?.long_name,
            zip: place.address_components.find(c => c.types.includes('postal_code'))?.long_name,
            country: place.address_components.find(c => c.types.includes('country'))?.long_name,
        }
        onAddressSelect(addressInfo);
    };

    return (
        <Wrapper apiKey={config.googleMapsApiKey} libraries={["places"]}>
            <PlacesAutocomplete value={address} onChange={handleChange} onSelect={handleSelect}>
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <WcTextField
                            {...getInputProps({
                                className: 'location-search-input',
                                autoComplete: 'new-password',
                            })}
                            placeholder="Address"
                            fullWidth
                        />
                        <Box sx={styles.container}>
                            {(loading || suggestions.length > 0) && (
                                <List className="autocomplete-dropdown-container" sx={styles.dropdownContainer}>
                                    {loading && <ListItem>Loading...</ListItem>}
                                    {suggestions.map((suggestion, index) => {
                                        const className = suggestion.active ? 'suggestion-item active' : 'suggestion-item';
                                        return (
                                            <ListItemButton
                                                sx={styles.listItem}
                                                {...getSuggestionItemProps(suggestion, {
                                                    className,
                                                    tabIndex: 0,
                                                })}
                                                key={index}
                                            >
                                                {suggestion.description}
                                            </ListItemButton>
                                        );
                                    })}
                                </List>
                            )}
                        </Box>
                    </div>
                )}
            </PlacesAutocomplete>
        </Wrapper>
    );
};

export default WcAddressInput;
